const isPrimitive = arg => arg === null || typeof arg !== 'object' && typeof arg !== 'function';

export default isPrimitive;
