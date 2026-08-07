<?php
declare(strict_types=1);

// Kota SDK exists test

require_once __DIR__ . '/../kota_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = KotaSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
