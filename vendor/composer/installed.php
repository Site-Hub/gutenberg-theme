<?php return array(
    'root' => array(
        'pretty_version' => '1.0.0+no-version-set',
        'version' => '1.0.0.0',
        'type' => 'library',
        'install_path' => __DIR__ . '/../../',
        'aliases' => array(),
        'reference' => NULL,
        'name' => '__root__',
        'dev' => true,
    ),
    'versions' => array(
        '__root__' => array(
            'pretty_version' => '1.0.0+no-version-set',
            'version' => '1.0.0.0',
            'type' => 'library',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'reference' => NULL,
            'dev_requirement' => false,
        ),
        'sendgrid/php-http-client' => array(
            'pretty_version' => '3.10.5',
            'version' => '3.10.5.0',
            'type' => 'library',
            'install_path' => __DIR__ . '/../sendgrid/php-http-client',
            'aliases' => array(),
            'reference' => '931a5a426fa3c3e31ecd8ad15597b2b183dad5db',
            'dev_requirement' => false,
        ),
        'sendgrid/sendgrid' => array(
            'pretty_version' => '7.4.6',
            'version' => '7.4.6.0',
            'type' => 'library',
            'install_path' => __DIR__ . '/../sendgrid/sendgrid',
            'aliases' => array(),
            'reference' => 'f3d17a2607f062447ed8356e4cb3ee7b5d3c15c8',
            'dev_requirement' => false,
        ),
        'sendgrid/sendgrid-php' => array(
            'dev_requirement' => false,
            'replaced' => array(
                0 => '*',
            ),
        ),
    ),
);
