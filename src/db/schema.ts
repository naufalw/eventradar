import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const events = sqliteTable('event', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    organizer: text('organizer').default("Anonymous"),
    created_at: text('created_at').default(""),
    start_at: text('start_at').notNull(),
    end_at: text('end_at').notNull(),
    lat: integer('lat').default(0),
    long: integer('long').default(0),
    url: text("url").notNull()
})