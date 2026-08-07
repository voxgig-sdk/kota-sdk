# Kota SDK utility: make_context

from core.context import KotaContext


def make_context_util(ctxmap, basectx):
    return KotaContext(ctxmap, basectx)
