# ProjectName SDK exists test

import pytest
from kota_sdk import KotaSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = KotaSDK.test(None, None)
        assert testsdk is not None
