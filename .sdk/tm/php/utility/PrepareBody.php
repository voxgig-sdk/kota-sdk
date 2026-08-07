<?php
declare(strict_types=1);

// Kota SDK utility: prepare_body

class KotaPrepareBody
{
    public static function call(KotaContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
