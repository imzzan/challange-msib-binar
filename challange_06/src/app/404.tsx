import { Button } from '@/component';
import Link from 'next/link';

const Costome404 = () => {
  return (
    <div>
        <h1>Page not found</h1>
        <Link href={'/'}><Button variant=' btn-danger' nameBtn='Back to home'/></Link>
    </div>
  )
}

export default Costome404