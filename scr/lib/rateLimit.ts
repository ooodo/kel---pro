const LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_PER_IP = 20;
const store = new Map<string, {count:number, reset:number}>();

export function rateLimit(ip: string) {
  const now = Date.now();
  const entry = store.get(ip);
  if (!entry || now > entry.reset) {
    store.set(ip, { count: 1, reset: now + LIMIT_WINDOW });
    return { allowed: true, remaining: MAX_PER_IP - 1 };
  }
  if (entry.count >= MAX_PER_IP) {
    return { allowed: false, retryAfter: Math.ceil((entry.reset - now)/1000) };
  }
  entry.count++;
  return { allowed: true, remaining: MAX_PER_IP - entry.count };
}
