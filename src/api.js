export const getFlag = async () => {
  try {
    const result = (await fetch('https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/617072')).text();
    return result;
  } catch (error) {
    return error;
  }
};