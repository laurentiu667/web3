
htaccess : Fichier qui permet la configuration d'apache au niveau d'un répertoire

--------------------------------------------------------

Doit avoir la commande "AllowOverride" dans la configuration d'apache, par exemple :

AllowOverride All

Autrement... htaccess est ignoré

--------------------------------------------------------

Également, le module mod_rewrite doit être activé dans httpd.conf

Commande bash : a2enmod rewrite