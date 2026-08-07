<?php
declare(strict_types=1);

// Kota SDK utility: result_body

class KotaResultBody
{
    public static function call(KotaContext $ctx): ?KotaResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
