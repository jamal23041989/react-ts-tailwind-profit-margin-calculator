import { CURRENCIES } from '../utils/constants'
import { CurrencyProps } from '../types'

export const Currency = ({ activeCurrency, onCurrency }: CurrencyProps) => {
	return (
		<div>
			<label className='block text-sm font-medium text-gray-700 dark:text-white mb-1'>
				Currency
			</label>
			{Object.entries(CURRENCIES).map(([name, symbol]) => (
				<span
					key={name}
					onClick={onCurrency(name, symbol)}
					className={`chip ${name === activeCurrency && 'active'}`}
				>
					{name}
				</span>
			))}
		</div>
	)
}
