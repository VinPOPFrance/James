# James Dashboard

Application privee prevue dans le meme depot que le site James.
Premiere version acquisition executable : Next.js 16, React 19, TypeScript,
PostgreSQL (`pg`). Aucun projet Vercel dashboard n'est encore cree.

## Architecture prevue

- Site public : racine du depot, projet Vercel existant inchange.
- Dashboard : application Next.js autonome dans `dashboard/`.
- Nouveau projet Vercel : Root Directory `dashboard`, puis domaine
  `dashboard.jamesdaime.com`.
- Donnees : PostgreSQL James, alimente par Airbyte (GA4, Google Ads, Meta).
- Connexion PostgreSQL cote serveur uniquement ; authentification requise.
- Aucun acces aux donnees ou secrets VinPop.

## Demarrer et valider

Depuis ce dossier :

```bash
npm ci
npm run dev
npm test
npm run lint
npm run build
```

Preview local : http://localhost:3001. Renseigner `DASHBOARD_PASSWORD`
dans `.env.local` pour activer l'acces. Aucune valeur par defaut n'est fournie.

Routes : `/login`, `/`, POST `/api/login`, POST `/api/logout`.
Les quatre rubriques utilisent le parametre `section` sur `/`.
Filtres `from` et `to` : dates calendaires, du 1 janvier 2025 a hier.
Le rapport est dynamique, non mis en cache, protege avant toute lecture SQL.
Les requetes sont parametrees et executees dans une transaction READ ONLY
avec un timeout de 15 secondes. Cela ne remplace pas des droits de role
limites cote PostgreSQL.

## Configuration privee

Pour le controle initial de la base, les parametres `PGHOST`, `PGPORT`,
`PGDATABASE`, `PGUSER`, `PGPASSWORD` et `PGSSLMODE` sont dans `.env.local`.
Ce fichier ne doit jamais etre commite.

Le futur dashboard utilisera `DATABASE_URL` avec un compte de lecture
dedie et `DASHBOARD_PASSWORD`, comme indique dans `.env.example`.
Ces variables seront configurees uniquement dans le projet Vercel du
dashboard, jamais comme variables `NEXT_PUBLIC_*`.

## Deploiement Vercel

1. Importer a nouveau le depot `VinPOPFrance/James` comme nouveau projet.
2. Nom propose : `james-dashboard` (selon disponibilite).
3. Framework Next.js ; Root Directory : `dashboard`.
4. Installation `npm ci`, build `npm run build`, sortie par defaut.
5. Renseigner `DATABASE_URL` (ou les variables PG locales) et
   `DASHBOARD_PASSWORD` dans ce projet uniquement. TLS valide le certificat.
6. Verifier les acces sans connexion et les rapports sur l'URL vercel.app.
7. Ajouter `dashboard.jamesdaime.com` et suivre les valeurs DNS de Vercel.

Ne pas modifier la Root Directory ou les domaines du projet du site public.
La creation d'un role PostgreSQL dedie en lecture seule reste recommandee ;
le role Airbyte `jamie` conserve actuellement des droits d'ecriture.

## Limites de cette V1

- Depenses Google issues de `custom_campaign_device`, sans ajout des autres
  rapports pour eviter le double comptage.
- Depenses Meta issues de `ads_insights`, non ajoutees aux rapports segmentes.
  Toutes les lectures Meta sont filtrees sur le compte 141739812 et les IDs
  de campagnes confirmes dans `lib/advertising.mjs`. Seule la campagne
  52533374224650 (Webinar - Lower back - 13 Oct) est confirmee par l'utilisateur.
  Les campagnes non confirmees sont exclues et leur volume/depense signale.
- Publicites : details annonces Google/Meta, appareils Google et
  plateforme/placement/appareil Meta. CTR, CPC et CPM calcules sur les sommes.
  Google conversions reste une mesure plateforme, pas une reservation.
  Clics sortants Meta distincts des clics totaux ; vues de destination
  issues seulement de l'action landing_page_view, sans cumul omni.
  Actions absentes affichees comme indisponibles, pas comme zero.
  Faible mesure de vues de destination : verifier tracking et consentement
  avant de conclure a un probleme de chargement du site.
- Sessions GA4 issues de `traffic_sources` ; vues de pages et engagement
  issus de `pages_path_report`, pas des sessions de pages de destination.
- Sommes absentes affichees comme indisponibles, pas remplacees par zero.
- Reservations, qualification et clients non mesures ; aucun cout par client.
- Actions : checklist statique, pas encore un outil de suivi des experiences.
- Authentification par mot de passe partage comme VinPop ; envisager un
  fournisseur d'identite ou une protection Vercel avant d'ouvrir l'acces
  a plusieurs utilisateurs. Aucun mecanisme de limitation des essais
  applicatif n'est encore configure.
- Audit npm : aucune alerte production au controle du 7 octobre 2026 ;
  cinq alertes high transitives dans l'outillage ESLint (braces/fast-glob),
  sans correction non-cassante proposee par npm. Pas de `audit fix --force`.

## Mesure

Le compte Meta 141739812 utilise EUR et America/Los_Angeles.
Les rapports quotidiens doivent conserver cette convention et la signaler ;
modifier une etiquette de fuseau ne reconstitue pas les journees europeennes.
Les campagnes James sont incluses uniquement apres confirmation de leurs IDs.

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
- Depuis ce controle initial : import Meta final confirme et acces depuis
  Vercel valide sur dashboard.jamesdaime.com. Restent a verifier le Pixel,
  les domaines/fuseau GA4 et les chiffres contre les interfaces sources.

## Verification publicites (7 octobre 2026)

Meta final charge : 32 lignes insights, 73 age/genre, 268 plateforme/appareil.
Sur la periode 7 septembre - 6 octobre : 70,26 EUR dans les insights James,
les annonces et les placements (accord a 0,01 EUR pres).
Google : 203,018124 EUR dans les details annonces et appareils sur cette
periode. Ces accords internes ne remplacent pas le controle dans Ads Manager
et Google Ads. Six tests unitaires, lint, build et quatre pages authentifiees
verifies localement avec les donnees reelles.
