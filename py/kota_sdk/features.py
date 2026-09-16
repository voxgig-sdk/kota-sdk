# Kota SDK feature factory

from kota_sdk.feature.base_feature import KotaBaseFeature
from kota_sdk.feature.debug_feature import KotaDebugFeature
from kota_sdk.feature.idempotency_feature import KotaIdempotencyFeature
from kota_sdk.feature.metrics_feature import KotaMetricsFeature
from kota_sdk.feature.paging_feature import KotaPagingFeature
from kota_sdk.feature.ratelimit_feature import KotaRatelimitFeature
from kota_sdk.feature.retry_feature import KotaRetryFeature
from kota_sdk.feature.test_feature import KotaTestFeature
from kota_sdk.feature.timeout_feature import KotaTimeoutFeature


_FEATURES = {
    "base": lambda: KotaBaseFeature(),
    "debug": lambda: KotaDebugFeature(),
    "idempotency": lambda: KotaIdempotencyFeature(),
    "metrics": lambda: KotaMetricsFeature(),
    "paging": lambda: KotaPagingFeature(),
    "ratelimit": lambda: KotaRatelimitFeature(),
    "retry": lambda: KotaRetryFeature(),
    "test": lambda: KotaTestFeature(),
    "timeout": lambda: KotaTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
