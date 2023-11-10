import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://urwjsjkxltbvifqnsbip.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyd2pzamt4bHRidmlmcW5zYmlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg0MTgxNTUsImV4cCI6MjAxMzk5NDE1NX0.AsO1N7dfOZMeKRrLpJA-zu1CedsKSikEygSSmABKNaI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
