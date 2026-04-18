/*
  # Contact Messages Table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `message` (text, required)
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `contact_messages`
    - Public (anon) users can INSERT messages (submit contact form)
    - Only authenticated users can SELECT their own submissions (none by default since no auth links)
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  message text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact message"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(name) > 0
    AND length(name) <= 120
    AND length(email) > 0
    AND length(email) <= 200
    AND length(message) > 0
    AND length(message) <= 5000
  );
