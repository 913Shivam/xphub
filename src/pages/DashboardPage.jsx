function DashboardPage({ onNavigate }) {
  return (
    <main className="grid min-h-screen place-items-center bg-xp-canvas px-4 py-8">
      <section className="w-full max-w-2xl rounded-xl border border-gray-200 bg-white p-8 text-center shadow-[0_12px_35px_rgba(0,0,0,0.06)] sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-xp-primary">
          XP-HUB
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-xp-heading">
          Welcome to your dashboard
        </h1>
        <p className="mt-3 text-slate-600">
          Your onboarding is complete. Your dashboard is ready for what comes
          next.
        </p>
        <button
          type="button"
          onClick={() => onNavigate("/")}
          className="mt-7 cursor-pointer rounded-md bg-xp-action px-6 py-3 text-sm font-semibold text-white transition hover:bg-xp-action-hover"
        >
          Back to sign in
        </button>
      </section>
    </main>
  );
}

export default DashboardPage;
