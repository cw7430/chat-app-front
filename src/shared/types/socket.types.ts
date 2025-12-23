type SocketResponse<T> = { ok: true; data: T } | { ok: false; error?: string };

export default SocketResponse;
