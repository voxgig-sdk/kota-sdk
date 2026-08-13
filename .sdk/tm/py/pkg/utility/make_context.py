# Kota SDK utility: make_context

from projectname_sdk.core.context import KotaContext


def make_context_util(ctxmap, basectx):
    return KotaContext(ctxmap, basectx)
