import contextvars
from aiohttp import web

# 定义全局上下文变量
current_request_var = contextvars.ContextVar("current_request", default=None)

class RequestContext:
    @staticmethod
    def get_current_request():
        return current_request_var.get()
    
    @staticmethod
    def set_current_request(request: web.Request):
        return current_request_var.set(request)
    
    @staticmethod
    def reset(token):
        current_request_var.reset(token)

    @staticmethod
    def set_var(key: str, value):
        request = RequestContext.get_current_request()
        if request:
            request[key] = value

    @staticmethod
    def get_var(key: str):
        request = RequestContext.get_current_request()
        if request:
            return request.get(key)
        return None
