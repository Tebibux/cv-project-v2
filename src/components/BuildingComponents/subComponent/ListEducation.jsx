/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const ListEducation = ({ educations }) => {
	return (
		<>
			{educations.length === 0 ?
				<div className="no-list"> Noting to show</div>
				:
				<>
					{educations.filter((education, index) => index !== 0)
						.map((education, count = 1) => (
							<li key={education.docKey} className="item-lists">
								<h5>{count}{education.filedOfEducation}</h5>
								<button className="edit">Edit</button>
								<hr />
							</li>
						))
					}
				</>
			}

		</>
	);
}

export default ListEducation