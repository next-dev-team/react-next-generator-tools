import React, { useContext } from 'react';
import Context from '../../Context';

import styles from './index.module.less';
import ShortFormContent from '../content/ShortFormContent';
import LongFormContent from '../content/LongFormContent';
import ShortDetailContent from '../content/ShortDetailContent';
import LongDetailContent from '../content/LongDetailContent';
import TableContent from '../content/TableContent';
import ShortFormModalContent from '../content/ShortFormModalContent';
import LongFormModalContent from '../content/LongFormModalContent';
import ShortDetailModalContent from '../content/ShortDetailModalContent';
import LongDetailModalContent from '../content/LongDetailModalContent';
import TableContent1 from '../content/TableContent1';

export default () => {
  const { templateType } = useContext(Context);

  /** Map different display content according to the template */
  const createContentByType = () => {
    switch (templateType) {
      case 'short-form':
        return <ShortFormContent />;
      case 'long-form':
        return <LongFormContent />;
      case 'one-column-form-modal':
        return <ShortFormModalContent />;
      case 'two-columns-form-modal':
        return <LongFormModalContent />;
      case 'short-detail':
        return <ShortDetailContent />;
      case 'long-detail':
        return <LongDetailContent />;
      case 'one-column-detail-modal':
        return <ShortDetailModalContent />;
      case 'two-columns-detail-modal':
        return <LongDetailModalContent />;
      case 'table':
        return <TableContent />;
      case 'table1':
        return <TableContent1 />;
      default:
        return null;
    }
  };

  return <div className={styles.dashboard}>{createContentByType()}</div>;
};
