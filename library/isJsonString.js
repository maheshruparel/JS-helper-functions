const isJsonString = string => {
  try {
    JSON.parse(string);
    return true;
  }
  catch {
    return false;
  }
}

export default isJsonString
