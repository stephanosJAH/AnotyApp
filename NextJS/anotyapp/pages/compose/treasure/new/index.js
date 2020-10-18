import Nav from 'components/AppLayout/Nav';
import Button from 'components/Buttons';

export default function newTreasure() {
  return (
    <>
      <section>
        <form>
          <textarea placeholder='¿Qué esta pasando?'></textarea>
          <div>
            <Button>Guardar</Button>
          </div>
        </form>
      </section>
      <Nav />
      <style jsx>{`
        section {
          min-height: 95%;
        }
      `}</style>
    </>
  );
}
