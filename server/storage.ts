import { contactSubmissions, users, type InsertContact, type ContactSubmission, type User, type InsertUser } from "../shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<ContactSubmission>;
  getContacts(): Promise<ContactSubmission[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createContact(contact: InsertContact): Promise<ContactSubmission> {
    const [submission] = await db.insert(contactSubmissions).values(contact).returning();
    return submission;
  }

  async getContacts(): Promise<ContactSubmission[]> {
    return db.select().from(contactSubmissions).orderBy(contactSubmissions.createdAt);
  }
}

export class MemStorage implements IStorage {
  private users: Map<number, User> = new Map();
  private contacts: ContactSubmission[] = [];
  private userId = 1;
  private contactId = 1;

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find((u) => u.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = { id: this.userId++, ...insertUser };
    this.users.set(user.id, user);
    return user;
  }

  async createContact(contact: InsertContact): Promise<ContactSubmission> {
    const submission: ContactSubmission = {
      id: this.contactId++,
      ...contact,
      phone: contact.phone ?? null,
      unitType: contact.unitType ?? null,
      createdAt: new Date(),
    };
    this.contacts.push(submission);
    return submission;
  }

  async getContacts(): Promise<ContactSubmission[]> {
    return this.contacts;
  }
}

export const storage: IStorage = process.env.DATABASE_URL
  ? new DatabaseStorage()
  : new MemStorage();
