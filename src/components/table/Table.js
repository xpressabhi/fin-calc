import classNames from 'classnames';
const Table = ({ classname, header = [], data = [] }) => {
	return (
		<div>
			<table className={classNames('table', classname)}>
				<thead>
					<tr>
						{header.map((h) => (
							<th key={h.key} className={classNames(h.classname)}>
								{h.label}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((d) => (
						<tr key={d.id}>
							{header.map((h) => (
								<td key={h.key} className={classNames(h.classname)}>
									{h.formatter ? h.formatter(d[h.key], d) : d[h.key]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
