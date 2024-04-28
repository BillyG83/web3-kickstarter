'use client';
import web3 from '../../../ethereum/web3';
import factory from '../../../ethereum/factory'

const CreateForm = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const minDonation = Number(e.currentTarget.elements['min-donation'].value);
    const accounts = await web3.eth.getAccounts();
    await factory.methods.createCampaign(minDonation).send({
      from: accounts[0]
    });
  }
  return (
      <form onSubmit={e => onSubmit(e)}>
        <input 
          id="camp-name"
          name="camp-name"
          placeholder="Campaign Name" 
          type="text" 
        />
        <textarea 
          name="camp-description"
          id="camp-description"
          placeholder="Campaign description" 
        />
        <input 
          name="min-donation"
          id="min-donation"
          placeholder="Minium donation" 
          type="number" 
        />
        <button type="submit">Lets go</button>
      </form>
  )
}

export default CreateForm