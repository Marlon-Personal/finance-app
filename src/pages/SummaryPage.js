import { Container } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import TotalsCard from '../components/TotalsCard';

export default function SummaryPage() {
  return (
      <>
    <Navbar />
    <Container>    
        <TotalsCard />
    </Container>

      </>
  );
}
