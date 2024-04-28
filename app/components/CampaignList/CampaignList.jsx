import Link from 'next/link';
import factory from '../../../ethereum/factory';

const CampaignList = async () => {
  const res = await factory.methods.getDeployedCampaigns().call();

  return (
      <section className="camp-list">
        <h1>Current Campaigns</h1>
        {
          res?.map((address) => 
            <Link key={address} href={`/campaign/${address}`}>{address}</Link>
          )
        }
      </section>
  )
}

export default CampaignList