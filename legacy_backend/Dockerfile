FROM php:7.4-apache

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Install dependencies
RUN apt-get update && apt-get install -y \
    git zip unzip libicu-dev && \
    docker-php-ext-install intl

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Set document root
WORKDIR /var/www/html

# Configure Apache
RUN sed -i 's!/var/www/html!/var/www/html/web!g' /etc/apache2/sites-available/000-default.conf

# Copy project files
COPY . /var/www/html

RUN composer install

EXPOSE 80
