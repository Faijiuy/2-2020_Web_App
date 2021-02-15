export default function CompanyInfo({ data }) {
    return (
        <div>
            <b>{data.name}</b><br />
            {data.address.street}<br />
            {data.address.province} {data.address.zipCode}<br />
            Tel: {data.phone}
        </div>
    )
}