<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mhcavkmz_wp_yleqm' );

/** Database username */
define( 'DB_USER', 'mhcavkmz_wp_tzzgb' );

/** Database password */
define( 'DB_PASSWORD', '_e8Z!C4DObhc8H0q' );

/** Database hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'euN+-F31v#-a250e:rI~e:s_*h2]7SL9m43)Z0Laj/#JlIy@(-6S_9@t:SgQlm%|');
define('SECURE_AUTH_KEY', 't5Va1T]99c7Ty7BW55YiL;311%]GkiGL4F@t26L9i|34OuE)!qOQ[o71|@sz*:#7');
define('LOGGED_IN_KEY', 'z@S|/3CsdiQaEbOh%~nR7+Qw6s2LOV6tdCN8OAU50Q+3Szj5*1ejX710WEN8F-2;');
define('NONCE_KEY', 'sm[H/#wl@BT48:/jyWCTkg%a6a75dTz/wJ82t[13O+url4psHKOv@t-!Z5L8o76w');
define('AUTH_SALT', '8q:ne(Z[KW/J6+6Vhx88p5p:-%f%YsOyPsH@2_ey8zwq32-fj2K1datu|8/6L(8%');
define('SECURE_AUTH_SALT', 'g3T#42-B63_fKAu)/fW9Jy)(%@L2pjj6rK46f9Zl6O]t@d@kq@L:U1__z@Z8*[S!');
define('LOGGED_IN_SALT', 'zEL3023|0XWZY9-xrrU;*o;)Vx#&c[yIJOHYm2p;O;XMp-&5&5#tU&Lv@+E0D:@2');
define('NONCE_SALT', 'vJ!E5Rn/W5R(H~IdmMr#ZZW10o![69-o#)/|fRu7+9B82IBL!3QfCCg48-]3x1fx');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'bT5bIGa_';


/* Add any custom values between this line and the "stop editing" line. */

define('WP_ALLOW_MULTISITE', true);
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
