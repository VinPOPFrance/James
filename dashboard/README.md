# James Dashboard

Application privee prevue dans le meme depot que le site James.
Le dossier contient uniquement la preparation de configuration ;
aucune application executable ni aucun projet Vercel ne sont encore crees.

## Architecture prevue

- Site public : racine du depot, projet Vercel existant inchange.
- Dashboard : application Next.js autonome dans `dashboard/`.
- Nouveau projet Vercel : Root Directory `dashboard`, puis domaine
  `dashboard.jamesdaime.com`.
- Donnees : PostgreSQL James, alimente par Airbyte (GA4, Google Ads, Meta).
- Connexion PostgreSQL cote serveur uniquement ; authentification requise.
- Aucun acces aux donnees ou secrets VinPop.

## Configuration privee

Pour le controle initial de la base, les parametres `PGHOST`, `PGPORT`,
`PGDATABASE`, `PGUSER`, `PGPASSWORD` et `PGSSLMODE` sont dans `.env.local`.
Ce fichier ne doit jamais etre commite.

Le futur dashboard utilisera `DATABASE_URL` avec un compte de lecture
dedie et `DASHBOARD_PASSWORD`, comme indique dans `.env.example`.
Ces variables seront configurees uniquement dans le projet Vercel du
dashboard, jamais comme variables `NEXT_PUBLIC_*`.

## Mesure

Le compte Meta 141739812 utilise EUR et America/Los_Angeles.
Les rapports quotidiens doivent conserver cette convention et la signaler ;
modifier une etiquette de fuseau ne reconstitue pas les journees europeennes.
Les campagnes James restent a distinguer des autres campagnes du compte.

## Controles de donnees (7 octobre 2026)

- Connexion locale a `jamie` validee en TLS 1.3 avec validation du certificat.
- Role `jamie` non-superuser, sans creation de bases ou de roles, mais avec
  droits d'ecriture sur les tables importees : ne pas le deployer tel quel.
- Les autres bases non-systeme testees acceptent CONNECT, mais aucune table
  applicative n'est lisible par ce role au moment du controle.
- GA4 : propriete 266851100 uniquement dans `traffic_sources`, 12 rapports
  charges jusqu'au 6 octobre 2026. Exemple : 12 sessions ce jour-la.
  Les anciens chemins WordPress et `/v2/` figurent dans l'historique ;
  `pages_path_report` n'a pas de dimension hostname pour verifier les domaines.
- Google Ads : compte 6905091323, EUR, Europe/Amsterdam. Neuf rapports charges.
  Derniere date observee dans `campaign` : 26 septembre 2026.
  Absence de lignes ulterieures a distinguer d'une panne ou de depenses nulles.
- `campaign` est segmente par date, heure et reseau publicitaire, pas une
  ligne unique par campagne et jour. Ses depenses et clics agrees avec
  `custom_campaign_device` sur les sept dernieres dates presentes.
- Les dates PostgreSQL doivent etre lues comme dates calendaires
  (`date::text`), pas converties en ISO UTC via JavaScript.
- Meta : premier import encore actif, tables finales vides au controle.
  Les volumes extraits affiches par Airbyte ne prouvent pas leur disponibilite
  dans les tables finales avant la fin du chargement.
- Restent a verifier : fin de l'import Meta, Pixel, domaines/fuseau GA4,
  chiffres contre les interfaces sources et acces depuis Vercel.
