process.loadEnvFile();
// get the environment variable
const getEnvVariable = (key) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

// Declare variables
let PORT;
let MONGODB_URI;
let DB_NAME;
let SECREST_KEY;
let SECRET_KEY_EXPIRE;
// Validate the environment variables
try {
  PORT = parseInt(getEnvVariable("PORT"), 10);
  MONGODB_URI = getEnvVariable("MONGODB_URI");
  DB_NAME = getEnvVariable("DB_NAME");
  SECREST_KEY = getEnvVariable('SECREST_KEY');
  SECRET_KEY_EXPIRE = getEnvVariable('SECRET_KEY_EXPIRE');
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

// Export the variables after validation
export { PORT, MONGODB_URI, DB_NAME, SECREST_KEY, SECRET_KEY_EXPIRE};