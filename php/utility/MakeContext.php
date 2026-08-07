<?php
declare(strict_types=1);

// Kota SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class KotaMakeContext
{
    public static function call(array $ctxmap, ?KotaContext $basectx): KotaContext
    {
        return new KotaContext($ctxmap, $basectx);
    }
}
