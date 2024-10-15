import { useState, useEffect } from 'react'
import style from './style.module.css'
import { IProduct } from '../../../service/interface'
import {getFindList} from '../../../service/fetchRepository'
import FindItem from './findItemComponent/findItem'
import Card from '../../cardComponent/card'

function Search({ search }: { search: string }) {
  const [products, setProducts] = useState<IProduct[] | undefined>()
  useEffect(() => {
		// if(!search) return
		getFindList(search).then(
			value => setProducts(value),
			reason => console.error(reason)
		)
	}, [search])
	return (
    <div className={style.main}>
      {
        products?.map(e=><FindItem key={e.id} {...e}/>)
			//  products?.map(e => <Card key={e.id} {...e} />)

      }
    
    </div>)
}
export default Search