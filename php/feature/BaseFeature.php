<?php
declare(strict_types=1);

// Kota SDK base feature

class KotaBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(KotaContext $ctx, array $options): void {}
    public function PostConstruct(KotaContext $ctx): void {}
    public function PostConstructEntity(KotaContext $ctx): void {}
    public function SetData(KotaContext $ctx): void {}
    public function GetData(KotaContext $ctx): void {}
    public function GetMatch(KotaContext $ctx): void {}
    public function SetMatch(KotaContext $ctx): void {}
    public function PrePoint(KotaContext $ctx): void {}
    public function PreSpec(KotaContext $ctx): void {}
    public function PreRequest(KotaContext $ctx): void {}
    public function PreResponse(KotaContext $ctx): void {}
    public function PreResult(KotaContext $ctx): void {}
    public function PreDone(KotaContext $ctx): void {}
    public function PreUnexpected(KotaContext $ctx): void {}
}
