import React from 'react';
import { Layout, MainLayout, RightLayout} from '../../../component/layout';
import Button from  '../../../component/button';
import InputBox from  '../../../component/input';
import {Table, TableRow, TableColtd, TableColth, TableHead, TableBody} from  '../../../component/table';


class Exaample extends React.Component {
	getValueContainewr (id) {
		
	}
	render () {
		return (
			/* 화면 구성 */
			<MainLayout>
				<Layout>
					<Table>
						<TableHead>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableColth width='12%'>Col1</TableColth>
								<TableColtd width='13%'><InputBox id="iptCol1" value="123" width='100%'/></TableColtd>
								<TableColth width="12%">Col2</TableColth>
								<TableColtd width='13%'><InputBox value="123" width='100%'/></TableColtd>
								<TableColth width='12%'>Col3</TableColth>
								<TableColtd width='13%'><InputBox value="123" width='100%'/></TableColtd>
								<TableColth width='12%'>Col4</TableColth>
								<TableColtd width='13%'><InputBox value="123" width='100%'/></TableColtd>
							</TableRow>
							<TableRow>
								<TableColth>Col1</TableColth>
								<TableColtd><Button></Button></TableColtd>
								<TableColth>Col2</TableColth>
								<TableColtd><Button></Button></TableColtd>
								<TableColth>Col3</TableColth>
								<TableColtd><Button></Button></TableColtd>
								<TableColth>Col4</TableColth>
								<TableColtd><Button></Button></TableColtd>
							</TableRow>
						</TableBody>
					</Table>
				</Layout>
				<RightLayout>
					<Button value="삭제"></Button>
					<Button value="저장"></Button>
					<Button value="수정"></Button>
					<Button value="신규"></Button>
				</RightLayout>
				<Layout>
				</Layout>
			</MainLayout>
		);
	}
}

export default Exaample;