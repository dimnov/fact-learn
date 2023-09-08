import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://usmrbxulfdjooblqjrgb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzbXJieHVsZmRqb29ibHFqcmdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM3NzUyMjgsImV4cCI6MjAwOTM1MTIyOH0.7tBi3xfqsEcApZjv7TER8k00V0JA-qGtKryC0O4c72Y';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;