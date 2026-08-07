# Kota SDK feature factory

from feature.base_feature import KotaBaseFeature
from feature.test_feature import KotaTestFeature


def _make_feature(name):
    features = {
        "base": lambda: KotaBaseFeature(),
        "test": lambda: KotaTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
