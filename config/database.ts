export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "127.0.0.1"),
      port: env.int("PGPORT", 5432),
      database: env("PGDATABASE", "blog"),
      user: env("PGUSER", "root"),
      password: env("PGPASSWORD", "root"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
