import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function inputsPage() {
  return (
    <div>
      <Header />

      <section>
        <form action="">
          <label htmlFor="nome">Nome</label>
          <input type="text" />
        </form>
      </section>
      <Footer />
    </div>
  );
}
