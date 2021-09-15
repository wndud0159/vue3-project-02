const health = [
    {
        question: '삶의 마지막 순간이에요. 임종이 가까워졌고, 당신은 현재 눈을 뜨기도 말을 하기도 힘든 상황입니다. 하지만 중요한 의료 결정들이 남아있어요. 누가 당신 대신 결정을 내리면 좋을까요?',
        answer_box: [],
        answer_text: '',
        iscomplete: false,
    },
    {
        question: '의료진이나 가족이 당신을 대신해 결정을 내려야하는 상황이에요. 어떤 정보들을 알고 있어야 할까요?',
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '당신이 생전에 결정한 삶을 마무리하는 방식에 참고할만한 중요한 의료문서가 있다면, 말씀해주세요. (사전연명치료금지서, 의료대리인 등)',
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '평온히 잠든 당신, 마지막 질문이에요. 생명을 나누는 ‘아름다운 나눔’ 장기 기증으로 세상에 기적을 선물하시겠어요?',
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
]

const finance = [
    {
        question: '생전에는 당신의 건강을 책임지고, 사후에는 가족들에게 보탬이 되는 생명 보험이 있으신가요? 있다면 보험 정보와 수혜자를 적어주세요.',
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '세상에 남기고 싶은 나의 마지막 말, 유언장이 있으신가요? 아직 없다구요? 마루를 계속해서 따라오세요. 아이백 사이트에서 음성 유언장을 작성할 수 있어요.',
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '가족들이 알 수 있게 여기에다 정리해볼까요? 혹시 모를 부채도 정리해보세요. 가족들이 당황하지 않게 말이에요.',
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '열심히 일해서 쌓아온 당신의 자산, 부동산, 은행 계좌, 주식을 관리하는 사람은 누군가요? 가족들이 누구에게 연락해야 할 지 알려주세요.',
        answer_box: [],
        answer_box_text: [],
        box_name1: '',
        box_name2: '',
        answer_text: '',
        iscomplete: false
    },
]

const testament = [
    {
        question: '남겨진 사람들에게 하고 싶은 말을 차근차근 정리해보세요. 좋아하는 인용구, 가치관, 삶의 교훈, 마지막 편지, 어떤 이야기든 좋아요.',
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '당신의 삶, 참 많은 일들이 있었네요. ‘마루’는 당신이 더 궁금해요. 어떻게 기억되고 싶으신가요? 당신의 이뤄온 삶의 발자국을 이야기 해주세요.',
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '당신이 하늘나라로 떠난 날이에요. 어떤 날보다 당신이 그리운 날일거에요. 남은 사람들은 마냥 슬퍼하지만 않도록 당신의 기일을 어떻게 기념하면 좋을까요?',
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '남은 가족들, 당신이 오랫동안 함께 했다면 좋았을텐데요. 하지만 남은 사람들은 그들의 삶을 살아가야 해요. 남은 가족을 어떻게 돌보면 좋을지 말씀해주세요. ‘마루’가 그들 곁을 지킬게요.',
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
]

const funeral = [
    {
        question: '누가 떠났든 장례식은 늘 같은 모습이죠. 당신을 기억하고 떠나보내기 위해서 무엇이 가장 중요할까요? 마지막으로 남긴 말을 전달해볼까요? 생전에 좋아하던 노래는 트는 것은요? 마지막 식사는 어떤 음식이 좋을까요?',
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '장례식은 어디서 진행되면 좋을까요?',
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '당신과의 마지막 인사는 어떤 분위기에서 나누면 좋을까요?',
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '이제 다시 자연으로 돌아갈 시간이에요. 어떤 방식으로 자연과 함께하고 싶으신가요? 안장 방식을 말씀해주세요.',
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
]

const digital = [
    {
        question: '네이버, 카카오를 비롯한 많은 사이트의 이메일 계정을 하나하나씩 떠올려보세요. 그냥 놔둘지, 삭제할지 고민해볼까요? 이 사람에게만 알려주고 싶으시면, 마루에게만 조용히 말해주세요.',
        answer_box1: [],
        answer_box2: [],
        box_state1: '',
        box_state2: '',
        box_state3: '',
        box_name1: '',
        box_name2: '',
        box_name3: '',
        answer_text: '',
        iscomplete: false
    },
    {
        question: '이제는 소셜미디어(SNS) 차례에요. 페이스북, 인스타그램, 트위터 등 당신의 기록이 담긴 계정들을 어떻게 정리할까요?',
        answer_box1: [],
        answer_box2: [],
        box_state1: '',
        box_state2: '',
        box_state3: '',
        box_name1: '',
        box_name2: '',
        box_name3: '',
        answer_text: '',
        iscomplete: false
    },
    {
        question: '귀하의 사후 이후, 귀하의 디지털 파일과 사진은 어떻게 관리되길 원하나요?',
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
    {
        question: '당신이 죽으면 디지털 자산(돈 가치가 있는 것)은 어떻게 되기를 원하십니까?',
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
]

const pet = [
    {
        question: '마루의 친구가 있었네요! 당신이 떠난 자리를 마루가 채울게요. 당신 대신 반려동물을 어떻게 돌보면 좋을지 말씀해주세요.',
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
]

const bucketlist = [
    {
        question: '세상과 이별하기 전 하고 싶은 것들을 떠올려 적어보세요. 마루가 옆에서 당신의 버킷리스트 친구가 될게요. 당신과 하나씩 완성할 버킷리스트가 벌써부터 기대돼요!',
        answer_box: [],
        answer_text: '',
        iscomplete: false
    },
]






const checklist = { health, finance, testament, funeral, digital, pet, bucketlist }
export default checklist