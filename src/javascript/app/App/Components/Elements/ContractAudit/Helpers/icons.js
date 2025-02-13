import React              from 'react';
import IconBarrierDark    from 'Images/app/contract_details/dark/ic-barrier.svg';
import IconDurationDark   from 'Images/app/contract_details/dark/ic-duration.svg';
import IconEntrySpotDark  from 'Images/app/contract_details/dark/ic-entryspot.svg';
import IconExitSpotDark   from 'Images/app/contract_details/dark/ic-exitspot.svg';
import IconIdDark         from 'Images/app/contract_details/dark/ic-id.svg';
import IconStartDark      from 'Images/app/contract_details/dark/ic-starttime.svg';
import IconTargetDark     from 'Images/app/contract_details/dark/ic-target.svg';
import IconBarrierLight   from 'Images/app/contract_details/light/ic-barrier.svg';
import IconDurationLight  from 'Images/app/contract_details/light/ic-duration.svg';
import IconEntrySpotLight from 'Images/app/contract_details/light/ic-entryspot.svg';
import IconExitSpotLight  from 'Images/app/contract_details/light/ic-exitspot.svg';
import IconIdLight        from 'Images/app/contract_details/light/ic-id.svg';
import IconStartLight     from 'Images/app/contract_details/light/ic-starttime.svg';
import IconTargetLight    from 'Images/app/contract_details/light/ic-target.svg';

export const getThemedIcon = (type, is_dark_theme) => {
    let IconType;
    if (type) {
        switch (type) {
            case 'id':
                IconType = is_dark_theme ? <IconIdDark /> : <IconIdLight />;
                break;
            case 'duration':
                IconType = is_dark_theme ? <IconDurationDark /> : <IconDurationLight />;
                break;
            case 'barrier':
                IconType = is_dark_theme ? <IconBarrierDark /> : <IconBarrierLight />;
                break;
            case 'target':
                IconType = is_dark_theme ? <IconTargetDark /> : <IconTargetLight />;
                break;
            case 'start_time':
                IconType = is_dark_theme ? <IconStartDark /> : <IconStartLight />;
                break;
            case 'entry_spot':
                IconType = is_dark_theme ? <IconEntrySpotDark /> : <IconEntrySpotLight />;
                break;
            case 'exit_spot':
                IconType = is_dark_theme ? <IconExitSpotDark /> : <IconExitSpotLight />;
                break;
            default:
                break;
        }
    }
    if (!IconType) return null;
    return IconType;
};
