import React from 'react'

// function HigherOC(Comp) {
//   return class extends React.Component {
//         render () {
//             const timestamp = new Date().toLocaleString();
//             return <Comp {...this.props} timestamp={timestamp} />
//         }
//    }  
// }

// export default HigherOC


function HigherOC(URL) {
    return function(Comp){
        return class extends React.Component {
            state = {
                data: null,
                loading:true,
                error:null
            };

            async componentDidMount() {
                try{
                    const resp = await fetch(URL);
                    const data = await resp.json();
                    this.setState({data,loading:false})
                }catch(error){
                    this.setState({error,loading:false})
                }
            }

            render () {
                const { data, loading, error} = this.state;
                return <Comp {...this.props} data={data} error={error} loading={loading}/>
            }
        }
    }
  }
  
  export default HigherOC