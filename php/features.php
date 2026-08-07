<?php
declare(strict_types=1);

// Kota SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class KotaFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new KotaBaseFeature();
            case "test":
                return new KotaTestFeature();
            default:
                return new KotaBaseFeature();
        }
    }
}
