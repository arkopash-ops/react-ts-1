import Example1 from '../UseMemoHook/Example1';
import Example2 from '../UseMemoHook/Example2';
import Example3 from '../UseMemoHook/Example3';

const UseMemoHook = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">Example1 - Fectorial</div>
                <div className="card-body">
                    <Example1 />
                </div>
            </div>

            <div className="card mt-3">
                <div className="card-header">Example2 - Search</div>
                <div className="card-body">
                    <Example2 />
                </div>
            </div>

            <div className="card mt-3">
                <div className="card-header">Example3 - ColorBox</div>
                <div className="card-body">
                    <Example3 />
                </div>
            </div>
        </div>
    )
}

export default UseMemoHook