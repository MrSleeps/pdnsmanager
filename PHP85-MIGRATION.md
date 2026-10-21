# PHP 8.5 migration notes

This branch is a **compatibility migration**, not a PowerDNS HTTP API migration. PDNS Manager continues to operate against the PowerDNS MySQL/MariaDB backend.

## Dependencies

The PHP backend in `backend/src` now targets PHP 8.5, Slim 3.12 and Monolog 2. Its existing `composer.lock` predates this upgrade and **must be regenerated and committed** before production deployment:

```sh
cd backend/src
composer update --with-all-dependencies
composer validate
composer check-platform-reqs
find . -path ./vendor -prune -o -name '*.php' -print0 | xargs -0 -n1 php -l
```

Run the existing backend integration suite against a **disposable test database**, not your production PowerDNS tables. The legacy integration tests use `backend/test/test.sh` and reset their configured database.

## Remaining validation

- Confirm dependency resolution and actual runtime behavior on PHP 8.5 (CI does dependency resolution and syntax checks).
- Regenerate and commit the Composer lock file on PHP 8.5.
- Run the HTTP integration suite against MariaDB/MySQL using PHP 8.5 and the new dependencies.
- Confirm compatibility with the installed PowerDNS database schema before deployment.

Do not deploy this branch to production until those checks pass.
