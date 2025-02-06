import contextvars
from aiohttp import web

current_request_var = contextvars.ContextVar("current_request", default=None)

class RequestContext:
    @staticmethod
    def get_current_request():
        return current_request_var.get()
    
    @staticmethod
    def set_current_request(request):
        return current_request_var.set(request)
    
    @staticmethod
    def reset(token):
        current_request_var.reset(token)

    @staticmethod
    def set_var(key: str, value):
        request = RequestContext.get_current_request()
        if request is not None:
            request[key] = value

    @staticmethod
    def get_var(key: str):
        request = RequestContext.get_current_request()
        if request is not None:
            ret = request.get(key)
            if key != 'user':
                return ret
            else:
                userId = ret.get("userId", None)
                if userId is not None:
                    return ret
                else:
                    return None
        return None
