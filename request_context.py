import contextvars
from aiohttp import web

# 定义全局上下文变量
current_request_var = contextvars.ContextVar("current_request", default=None)

async def create_request_context_middleware(app, handler):
    @web.middleware
    async def request_context_middleware(request: web.Request, handler):
        token = current_request_var.set(request)  # 存储请求
        try:
            return await handler(request)
        finally:
            current_request_var.reset(token)  # 处理完成后清除
    return request_context_middleware

class RequestContext:
    @staticmethod
    def get_current_request():
        return current_request_var.get()
    
    @staticmethod
    def set_current_request(request: web.Request):
        current_request_var.set(request)

    @staticmethod
    def set_var(key: str, value):
        current_request_var.set(value)

    @staticmethod
    def get_var(key: str):
        return current_request_var.get().get(key)
