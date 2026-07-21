import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-page py-20">
      <p className="eyebrow">Page introuvable</p>
      <h1 className="mt-3 text-4xl font-black text-brand-navy">Cette page n’existe pas.</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        Le lien demandé ne correspond à aucune page du site Innov Computer Pressing.
      </p>
      <Link href="/" className="button-primary mt-8">
        Retour à l’accueil
      </Link>
    </main>
  );
}
