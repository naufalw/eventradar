import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const events = sqliteTable('event', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    organizer: text('organizer').default("Anonymous"),
    created_at: integer('id', { mode: 'timestamp_ms' }).defaultNow(),
    start_at: integer('start_at', { mode: 'timestamp_ms' }).notNull(),
    end_at: integer('end_at', { mode: 'timestamp_ms' }).notNull(),
    lat: integer('lat').default(0),
    long: integer('long').default(0)
})